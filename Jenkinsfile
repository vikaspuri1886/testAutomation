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
        sh 'mvn -f pom.xml package'
      }
    }

    stage('IntegerationTesting') {
      steps {
        sh 'mvn -f pom.xml failsafe:integration-test'
      }
    }

    stage('GenerateReports') {
      steps {
        cucumber(fileIncludePattern: '**/cucumber.json', jsonReportDirectory: 'target')
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}