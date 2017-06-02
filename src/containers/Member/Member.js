import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Member extends Component {
  static propTypes = {
    index: PropTypes.number,
    member: PropTypes.object,
  }

  render() {
    const { index, member: { name, title, photo, intro, gitLink } } = this.props;
    const className = index % 2 === 0 ? 'wrapper spotlight style1' : 'wrapper alt spotlight style2';

    return (
      <section className={className}>
        <div className="inner">
          <a href="/" className="image">
            <img src={photo} alt="" />
          </a>
          <div className="content">
            <h2 className="major">
              {name}, {title}.
            </h2>
            {
              intro.map(item => <p>{item}</p>)
            }
            {
              gitLink &&
              <a className="btn-github" href={gitLink}>
                <span className="fa fa-github" /> {name}`s GitHub
              </a>
            }
          </div>
        </div>
      </section>
    );
  }
}
