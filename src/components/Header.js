import React from 'react';

const Header = ({pseudo}) => {
    const formatPseudo = (pseudo) => {
      if (/[aeiouy]/i.test(pseudo[0])) {
          return `d'${pseudo}`;
      }

        return `de ${pseudo}`;
    };

    return (
        <header>
            <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
        </header>
    );
};

export default Header;
