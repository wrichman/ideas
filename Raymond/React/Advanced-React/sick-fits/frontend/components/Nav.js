// Link works with places that are part of your website
// outside use <a>
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}