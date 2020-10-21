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

    stage('Deploy') {
      steps {
        sh 'mvn -f pom.xml package deploy -DmuleDeploy'
      }
    }

    stage('IntegerationTesting') {
      steps {
        sh 'mvn -f pom.xml failsafe:integration-test'
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}