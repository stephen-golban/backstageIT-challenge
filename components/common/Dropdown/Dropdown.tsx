import React from 'react';

import { Popover, Transition } from '@headlessui/react';

import * as S from './Dropdown.styles';

interface IDropdownProps {
  children: (args: { open: boolean; close: () => void }) => React.ReactNode;

  renderTrigger: JSX.Element;
}

const Dropdown: React.FC<IDropdownProps> = ({ children, renderTrigger }) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button>{renderTrigger}</Popover.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <S.Container>
              <S.Wrapper>{children({ open, close })}</S.Wrapper>
            </S.Container>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Dropdown;
