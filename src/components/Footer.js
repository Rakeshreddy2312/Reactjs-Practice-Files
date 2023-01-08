function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-links">
          ABOUT
          <ul type="none">
            <li className="sub-links">link1</li>
            <li className="sub-links">link2</li>
            <li className="sub-links">link3</li>
          </ul>
        </li>

        <li className="footer-links">CONTACT US</li>
        <li className="footer-links">PRIVATE POLICY</li>
        <li className="footer-links">
          FOLLOW US ON
          <ul type="none">
            <li className="sub-links">facebook</li>
            <li className="sub-links">linkedin</li>
            <li className="sub-links">twitter</li>
            <li className="sub-links">instagram</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
