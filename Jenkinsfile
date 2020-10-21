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

    stage('Email') {
      steps {
        emailext(subject: 'Cucumber Reports', body: 'Attached the body', attachLog: true, attachmentsPattern: 'target/cucumber.json', from: 'vikaspuri123@gmail.com', mimeType: 'application/json', to: 'vikas_mullana@yahoo.com')
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}