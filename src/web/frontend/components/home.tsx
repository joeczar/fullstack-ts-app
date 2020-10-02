import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
