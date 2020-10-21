pipeline {
  agent any
  stages {
    stage('Start') {
      steps {
        echo 'Starting the pipeline'
      }
    }

    stage('Build') {
      steps {
        sh 'tools {maven \'M2_HOME\'}'
      }
    }

  }
}