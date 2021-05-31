import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          <script src="/js/jquery.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/myjs.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
