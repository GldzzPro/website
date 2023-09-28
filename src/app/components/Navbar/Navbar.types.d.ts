interface NavLinkProps {
    to: string,
    children: React.ReactNode
    selected?: boolean
}
interface MobileNavbarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}