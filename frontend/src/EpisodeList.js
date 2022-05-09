import React from 'react';
import { Card, Col, Row } from 'antd';
import episodeApi from './EpisodeApi';

class EpisodeDetail extends React.Component {
  state = {
    episode: this.props.episode,
  };

  render() {
    const {
      episode: {
        id,
        name,
        image: { medium: thumbUrl },
      },
    } = this.state;
    return (
      <Card style={{ width: 240 }} cover={<img src={thumbUrl} alt={name} />}>
        <Card.Meta title={name} />
      </Card>
    );
  }
}

class EpisodeList extends React.Component {
  state = {
    episodeList: [],
  };

  componentDidMount() {
    const apiUrl = '/singlesearch/shows';
    const params = {
      q: 'earth',
      embed: 'episodes',
    };
    episodeApi
      .get(apiUrl, { params })
      .then((response) => {
        const { data } = response;
        const episodes = data._embedded.episodes;
        console.log(episodes);
        this.setState({
          episodeList: episodes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { episodeList } = this.state;
    return (
      <div>
        <h1>EpisodeList</h1>
        <Row>
          {episodeList.map((episode) => (
            <Col span={8}>
              <EpisodeDetail episode={episode} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default EpisodeList;
