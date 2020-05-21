import React, {Component} from "react"
import API from "../utils/API"
import SearchForm from "./SearchForm"

class DataArea extends Component {
    state = {
        users: [{}],
        filteredUsers: [{}],
        order: "descend"
    }

headings = [
    {name: "Image", width: "10%"},
    {name: "Name", width: "10%"},
    {name: "Phone", width:"20%" },
    {name: "Email", width: "20%"},
    {name: "DOB", width: "10%"}
]

handleSearchChange = (event) => {
    const filter = event.target.value
    const filteredList= this.state.users.filter(item => {
        let values = Object.values(item).join("").toLowerCase
        return values.indexOf(filter.toLowerCase()!== -1)
    })
    this.setState({filteredUsers: filteredList})
}

componentDidMount(){
    API.search().then(results => {
        this.setState({users: results.data.results, filteredUsers: results.data.results})
    })
}

render(){
    return(
        <>
    <SearchForm
    handleSearchChange = {this.handleSearchChange}
    />


        </>
    )
}

}






