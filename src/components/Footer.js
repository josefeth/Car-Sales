import React from 'react';
import 'react-bulma-components/basic/react-bulma-components.min.css';
import { Button } from 'react-bulma-components'
import React from 'react';


const Footer = props => {
    return (
      <div>
        <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
      </div>
    );
  };
  
  export default Footer;

// import React from 'react';

// import { storiesOf } from '@storybook/react';

// import Footer from 'react-bulma-components/lib/components/footer';
// import Container from 'react-bulma-components/lib/components/container';
// import Content from 'react-bulma-components/lib/components/content';
// import Hero from 'react-bulma-components/lib/components/hero';

// storiesOf('Footer', module)
//   .add('Default', (() => (
//     <Hero size="fullheight">
//       <Hero.Head renderAs="header" />
//       <Hero.Body />
//       <Hero.Footer>
//         <Footer>
//           <Container>
//             <Content style={{ textAlign: 'center' }}>
//               <p>
//                 <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
//                 <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
//               is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
//               </p>
//             </Content>
//           </Container>
//         </Footer>
//       </Hero.Footer>
//     </Hero>
//   )));