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
        sh 'mvn -f pom.xml clean install'
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}