import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import { sideBarLinks } from '../utils/index';
import VespaStyles from '../scss/vespa.module.scss';

const Vespa = ({ vespas, match }) => {
  const vespa = vespas.find((el, idx) => idx === Number(match.params.id));
  return (
    <div className={VespaStyles.VespaContainer}>
      <Sidebar links={sideBarLinks} />
      {
        vespa ? (
          <div className={VespaStyles.Vespa}>
            <div className={VespaStyles.VespaSection}>
              <img src={vespa.imageUrl} alt="" className={VespaStyles.VespaImg} />
              <h4 className={VespaStyles.Header}>{vespa.name}</h4>
              <p className={VespaStyles.Text}>{vespa.description}</p>
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

const mapStateToProps = ({ vespas }) => ({
  vespas,
});

Vespa.propTypes = {
  vespas: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(connect(mapStateToProps)(Vespa));
