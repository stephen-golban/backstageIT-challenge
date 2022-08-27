import tw from 'tailwind-styled-components';

const Container = tw.div`
    w-full
    h-[83px]
    flex
    px-[60px]
    items-end
`;

const Logo = tw.a`
    uppercase
    font-bold
    text-xl
    cursor-pointer
    text-white
`;

const Nav = tw.nav`
    w-full
    flex
    items-center
    justify-between
`;

const Wrapper = tw.div`
    flex
    items-center
    justify-between 
`;

const NavLink = tw.a`
    uppercase
    font-normal
    text-white
    tracking-wide
    cursor-pointer
    hover:opacity-80
    transition-opacity
    mx-4
`;

export { Container, Logo, Nav, Wrapper, NavLink };
