pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JAVA_HOME' }", "PATH+MAVEN=${tool 'MAVEN_HOME'}/bin:${env.JAVA_HOME}/bin"]) {
          sh 'mvn -f pom.xml clean install'
        }

      }
    }

    stage('Deploy') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JAVA_HOME' }", "PATH+MAVEN=${tool 'MAVEN_HOME'}/bin:${env.JAVA_HOME}/bin"]) {
          sh 'mvn -f pom.xml package deploy -DmuleDeploy'
        }

      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}