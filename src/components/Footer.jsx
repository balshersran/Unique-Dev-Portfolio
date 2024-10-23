

export default function Footer() {
    const githubUrl = 'https://github.com/balshersran';
    return(
        <div className="footer-container">
            {/* insert an image for github */}
            <div className="footer-el">
            <a href={githubUrl}>Github</a>
            </div>
            <br />
            <div className="footer-el">
            {/*  insert an image for linkedin */}
            <a href={githubUrl}>LinkedIN</a>
            </div>
        </div>
    );
}