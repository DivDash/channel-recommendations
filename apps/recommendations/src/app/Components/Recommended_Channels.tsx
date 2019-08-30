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

    componentDidMount() {
        // fetch('/channel')
        //     .then(r => r.json().then(res => {
        const list: Array<Channel> = [];
        for (let i = 0; i < 50; i++)
          list.push({
            name: `Channel ${i+1}`,
            id: String(i),
            userIds: []
          });
        this.setState({
            recommendationsList: list,
        })
            // }))
    }

    render() {
        const { recommendationsList } = this.state;
        return (
            <div>
                <h1>List of recommended channels</h1>
                <ul>{
                    recommendationsList && recommendationsList.map((item, index) => {
                        return (
                          <li key={item.id}>{item.name}</li>
                        )
                    })
                }</ul>
            </div>
        );
    }
}

export default Recommendations;
