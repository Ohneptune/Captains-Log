const React = require("react");

class Index extends Component {
    render () {
        const logs = this.prop.logs
        return (
            <html>
                <div>
                    <ul>
                        {logs.map((logs, i) => {
                            return(
                                <li key={i}>
                                    <a href={`/logs/${logs.id}`}> {logs.title} </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </html>
        )
    }
}

module.exports = Index;