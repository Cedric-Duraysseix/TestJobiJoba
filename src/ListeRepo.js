import React, { Component } from 'react'
import './ListeRepo.css';

class ListeRepo extends Component {

    state = {
        isLoading: true,
        repositories: []
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`https://api.github.com/search/repositories?q=es6&order=desc`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    repositories: data,
                    isLoading: false
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { isLoading, repositories } = this.state;
            return (
                <div>
                    {isLoading ? <p>Loading</p> :
                        <tbody>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Url</th>
                            <th>Nombre de stars</th>
                        </tr>
                        {repositories && Array.isArray(repositories.items) && repositories.items.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.html_url}</td>
                                <td>{item.stargazers_count}</td>
                            </tr>
                        ))}
                        </tbody>
                    }
                </div>
            )
        }
}

export default ListeRepo;