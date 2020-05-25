import React, {Component} from "react"
import API from "../utils/API"
import SearchForm from "./SearchForm"
import Table from "./Table"

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

handleSort = (headings) => {
    if(this.state.order === "descend") {
        this.setState({order: "ascend"})
    } else { this.setState({order:"descend"}
    )
}
const compareFunction = (a, b) => {
    if(this.state.order === "ascend" ){
        if(a [headings] === undefined) {
            return 1
        } else if (b [headings] === undefined ){
            return -1
        } else if (headings === "name"){
            return a [headings].first.localeCompare(b[headings].first)
        } else { return a [headings] - b [headings]}
    } else {
        if (a[headings] === undefined) {
            return 1 
        }  else if (b [headings] === undefined ){
            return -1
    } else if (headings === "name"){
        return b [headings].first.localeCompare(a[headings].first)
    } else {
        return b [headings] - a [headings]
    }

    
}
}
const sortedUser = this.state.filteredUsers.sort(compareFunction)
this.setState({filteredUsers: sortedUser})
}


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
    <Table
    headings = {this.headings}
    users = {this.state.filteredUsers}
    handleSort = {this.handleSort}
    />

        </>
    )
}

}

export default DataArea




