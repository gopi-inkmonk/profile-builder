import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    const { data, type } = this.props;

    const StoryList = data.map(story => {
      return (
        <div key={story.story} className={story.year}>
          <dt>
            {story.year}
          </dt>
          <dd>
            {story.story}
          </dd>
        </div>
      );
    });

    return (
      <dl className="timeline">
        {StoryList}
      </dl>
    );
  }
}

export default Timeline;
