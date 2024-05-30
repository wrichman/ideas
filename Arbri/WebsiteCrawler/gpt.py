import json
from firecrawl import FirecrawlApp  
from openai import OpenAI
import csv

fields = ['Name', 'Deadline', 'Amount', 'pSuccess', 'GrantExpectedValue', 'TimeEstimateToComplete', 'Cost', 'Margin', 'GrantURL', 'Eligible_Industry', 'Eligible_Region', 'Eligible_Employees', 'Eligible_Founded', 'Eligible_Revenue', 'Description_2', 'Eligible_Criteria', 'Eligible_Activities', 'Eligible_Applicants', 'Grant_Goal', 'Description', 'Eligible_Profitable', 'GrantOrLoan', 'OpenOrClosed']
rows = []



RED = "\033[31m"
GREEN = "\033[32m"
YELLOW = "\033[33m"
BLUE = "\033[34m"
MAGENTA = "\033[35m"
CYAN = "\033[36m"
RESET = "\033[0m"
print(RESET)

client = OpenAI(api_key='sk-proj-PC5zazHI76EQ32REdDD9T3BlbkFJLZWNjK5j5y0bSpPAcgza')  # Set your OpenAI API key

# Initialize Firecrawl with your API key
firecrawl = FirecrawlApp(
    api_key="fc-8e57f69e8f4347aa9b08d954b67c4600",
)

# List of links to scrape and process
links = ["https://agriculture.canada.ca/en/programs/agriinnovate?w_email=warmly%40getupgraded.ca&utm_campaign=Q2%20-%202024&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8kWsEuJl95HPzBSMJRgi9-OfiSiqNEXhJQpBZ12DA21FsIk5027AuNiFQMnN-Ctx7XhuSK",
         "https://www.tradecommissioner.gc.ca/cta-atc/hong-kong-sustainability-tech_tech-relatives-durabilite-hong-kong.aspx?lang=eng"
         
   

]



def scrape_page_content(url):
    page_content = firecrawl.scrape_url(url=url,  # Target URL to crawl
        params={
            "pageOptions": {
                "onlyMainContent": True  # Ignore navs, footers, etc.
            }
        }
    )
    print(f"{YELLOW}Printing Page Content: ")
    print(f"{YELLOW}{page_content}")
    return page_content

def extract_information(page_content, url):
    prompt = f"""
    You are a professional grant expert & advisor who extracts information from documents in JSON format. Your job is to categorize the data 
    
    'Name' refers to the name of the grant 

    'Deadline' refers to the date at which the grant expires if none found print null ... The deadline must be a date

    'Amount' refers to the amount of $ the grant offers if none found print null

    'pSuccess' is a percentage value that refers to the likelihood of success of claiming the grant, if not found assume 60%

    'GrantExpectedValue' refers to the value given when you multiply 'Amount' & 'pSuccess'... simply return that result 

    'TimeEstimateToComplete' refers to the minutes needed to submit an application for the grant, give me a reasonable guess for example, '60' or '40' 

    'Cost' is that value of TimeEstimateToComplete multiplied by 100, return a dollar sign in front of the number 

    'Margin'  leave this as null

    'GrantURL' return the grant's URL

    'Eligible_Industry' refers to the industry that is tied to the grant if none found print null

    'Eligible_Region' refers to the region the grant is applicable in, if none found print null

    'Eligible_Employees' refers to the # of employees needed to apply... assume 3 if not found

    'Eligible_Founded' refers to year a company needs to be founded to be applicable to apply, assume 2022 if none found

    'Eligible_Revenue' refers to revenue needed to apply, assume 100000 if none other is found

    'Description_2' refers to the description of the grant if none found print null

    'Eligible_Criteria' the criteria needed to apply for the grant if none found print null

    'Eligible_Activities' the activities needed to apply, if none found just print null

    'Grant_Goal' refers to the goal of the grant if none found print null

    'Description' another description of the grant? if none found print null

    'Eligible_Profitable' a Yes or No response if you need to be profitable to apply assume No is none found

    'GrantOrLoan' refers to if the information given to you is a Grant or a Loan please answer this either Grant or Loan, if none found, assume Grant

    'OpenOrClosed' refers to if the grant is still open for applications please answer Open or Closed 

    
    Custom Rules:

    IT IS VERY IMPORTANT YOU FOLLOW THESE RULES
    If a link is not found for whatever reason simply return null for each category,
    Please do not bold the categories as I will simple pull them into a .csv file, also do not give an intro to the response, 
    Leave a colon after each category.

    Page content:
    {page_content}

    Information to extract:
    - Name 
    - Deadline
    - Amount
    - pSuccess
    - GrantExpectedValue
    - TimeEstimateToComplete
    - Cost
    - Margin
    - GrantURL
    - Eligible_Industry
    - Eligible_Region
    - Eligible_Employees
    - Eligible_Founded
    - Eligible_Revenue
    - Description_2
    - Eligibility_Criteria
    - Eligible_Activities
    - Eligible_Applicants
    - Grant_Goal
    - Description
    - Eligible_Profitable
    - GrantOrLoan
    - OpenOrClosed
    """

    response = client.chat.completions.create(model="gpt-4-turbo",  # Using GPT-3.5-turbo
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant that extracts information from grant websites and retrieves requested information."
        },
        {
            "role": "user",
            "content": prompt
        }
    ],
    temperature=0,
    max_tokens=1024,
    top_p=1,
    n=1,
    stop=None)

    # Extract the text content from the response
    data_extracted = response.choices[0].message.content.strip()

    # Attempt to parse the extracted data as JSON
    print(f"{CYAN}{data_extracted}")
    print(f"{RED}{type(data_extracted)}")

    return(data_extracted)

# Loop through each link and process
    



all_extracted_data = []

# Open a CSV file for writing
with open('GrantScraper.csv', 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)

    csvwriter.writerow(fields)

    # Loop through each link and process
    for link in links:
        print(f"{MAGENTA}Handling link {links.index(link) + 1} of {len(links)}.\n")
        page_content = scrape_page_content(link)
        data_extracted = extract_information(page_content, link)

        print(f"{RESET}{data_extracted}")

        data_dict = dict(item.split(': ', len(links)) for item in data_extracted.split('\n') if item.strip())
        print({BLUE})
        print(data_dict)

        # Write data row
        csvwriter.writerow(data_dict.values())

        # # Writing data to CSV row
        # csvwriter.writerow([data_extracted.get(field, 'null') for field in fields])
    

# Print the extracted data for all links
print("{RESET}Completed, Dumping Data.")
print(json.dumps(all_extracted_data, indent=4))
print(RESET)



