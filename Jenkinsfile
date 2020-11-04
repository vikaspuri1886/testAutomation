pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JAVA_HOME' }", "PATH+MAVEN=${tool 'MAVEN_HOME'}/bin:${env.JAVA_HOME}/bin"]) {
          sh 'mvn -f pom.xml clean install package'
        }

      }
    }

    stage('upload to nexus') {
      steps {
        nexusArtifactUploader(artifacts: [[artifactId: 'posttestscript', classifier: '', file: 'target/posttestscript-1.0.0-SNAPSHOT.jar', type: 'jar']], credentialsId: 'nexus', groupId: 'com.mycompany', nexusUrl: 'localhost:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'http://localhost:8081/repository/com.njclabs/', version: '1.0.0-SNAPSHOT')
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}