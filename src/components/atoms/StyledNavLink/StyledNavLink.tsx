import Link from "next/link";

interface StyledLinkProps {
  title: string;
  href: string;
}

export const StyledNavLink: React.FC<StyledLinkProps> = (props) => {
  const className = "nav-link";

  return (
    <Link href={props.href} className={className}>
      {props.title}
    </Link>
  );
};
