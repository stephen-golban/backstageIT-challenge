import { Popover } from '@headlessui/react';

import tw from 'tailwind-styled-components';

const Container = tw(Popover.Panel)`
    absolute
    -left-24
    z-10
    mt-3
    w-auto
    -translate-x-96
    transform
    px-4
    sm:px-0
    lg:max-w-3xl
    bg-white
`;

const Wrapper = tw.div`
    overflow-hidden
`;

export { Container, Wrapper };
