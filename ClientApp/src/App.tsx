import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home, Administration, SurveyEdition, SurveyQuestionEdition, Collaborator,SurveyStats } from './components/pages';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/administration' component={Administration} />
        <Route path='/collaborator/:nie' component={Collaborator} />
        <Route exact path='/surveyEdition/' component={SurveyEdition} />
        <Route exact path='/surveyEdition/:surveyId' component={SurveyEdition} />
        <Route exact path='/SurveyQuestionEdition/:surveyId/:sectionId/:questionId' component={SurveyQuestionEdition} />
        <Route exact path='/SurveyStats/:surveyId' component={SurveyStats} />
      </Layout>
    );
  }
}
