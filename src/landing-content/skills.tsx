import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <div id="skills" className={styles.skillsContainer}>
            <div className={styles.heading}>Skills</div>
            <div className={styles.skillsSectionContainer}>
                <div className={styles.skillsSection}>
                    <div className={styles.sectionTitle}>Programming Languages</div>
                    <ul>
                        <li>C, C++, C#</li>
                        <li>Python</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className={styles.skillsSection}>
                    <div className={styles.sectionTitle}>Frameworks/Libraries</div>
                    <ul>
                        <li>Web Stuff: Angular, React, Nextjs, J2EE, ASP.NET</li>
                        <li>Server Stuff: Node, Express, Flask</li>
                        <li>.NET, WinForms</li>
                    </ul>
                </div>
                <div className={styles.skillsSection}>
                    <div className={styles.sectionTitle}>Tools &amp; Technologies</div>
                    <ul>
                        <li>Various database engines: MSSQL, Oracle SQL Database, SQLLite3</li>
                        <li>SQL</li>
                        <li>Cloud platforms</li>
                        <li>Figma</li>
                        <li>Bash/Basic Powershell</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills

