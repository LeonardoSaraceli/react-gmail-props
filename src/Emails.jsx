import Email from "./Email";
import './styles/Emails.css'

export default function Emails({ filteredEmails, toggleRead, toggleStar }) {
    return (
        <main className="emails">
            <Email 
                filteredEmails={filteredEmails}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
            />
        </main>
    )
}