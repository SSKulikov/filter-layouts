import React from "react";
import listPosts from '../assets/listPosts.json'
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";

export class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFilter: 'All',
            listPosts
        }

        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({selectedFilter: filter})
    }

    render() {
        return (
            <div>
                {/* <LikeButton changePost={changePost} /> */}
                <Toolbar 
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selectedFilter}
                    onSelectFilter={this.handleFilter}
                />
                <ProjectList projects={this.state.selectedFilter == 'All' 
                ? this.state.listPosts 
                : this.state.listPosts.filter(p => p.category == this.state.selectedFilter)}/>
            </div>
        )
    }
}