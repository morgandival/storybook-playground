import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Morgan Di Val" />
      </Head>
      <body>
        <Header backgroundColor={'#ebe'} />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
