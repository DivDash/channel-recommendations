import * as React from 'react';
import { Channel } from "@recommendation/channel";
export interface RecommendationsProps {

}

export interface RecommendationsState {
    recommendationsList: Array<Channel>;
}

class Recommendations extends React.Component<RecommendationsProps, RecommendationsState> {
    constructor(props: RecommendationsProps) {
        super(props);
        this.state = { recommendationsList: [] };
    }

    componentWillMount() {
        fetch('/channel')
            .then(r => r.json().then(res => {
                this.setState({
                    recommendationsList: res,
                })
            }))
    }

    render() {
        const { recommendationsList } = this.state;
        return (
            <div>
                <h1>List of recommended channels</h1>
                <ul>{
                    recommendationsList && recommendationsList.map((item, index) => {
                        return (
                            <li>{item.name}</li>
                        )
                    })
                }</ul>
            </div>
        );
    }
}

export default Recommendations;