# This codebase is no longer maintained. Please use the fork at https://github.com/Redpill-Linpro/alfresco-listmanager instead.

# [Alfresco](http://www.alfresco.com) Listmanager
This addon provides a way to manage list of values to be used in alfresco metadata forms. The model provided constraints are not 
always suitable to use. Sometimes you just want to pick a value from a list without constraining anything. In addition there is no
need to restart Alfresco after editing the lists (which is the case when using contraints).

## Authors
[Marcus Cedergren](https://github.com/masse),

[Erik Billerby](https://github.com/billerby) 

### Contributors
[Bertrand Forest](https://github.com/bforest)

## Getting started

### Dependencies

#### Alfresco

This extension was created with the [Alfresco Maven SDK](https://arti
facts.alfresco.com/nexus/content/repositories/alfresco-docs/alfresco-lifecycle-aggregator/latest/index.html) and compiles against Alfresco Community 4.2.c. It has also been tested with:

* Alfresco Community 4.0.e and higher
* Alfresco Enterprise 4.0.2 and higher

### Building

The project uses [Maven](http://maven.apache.org) for building.

Clone the source, enter the directory and execute

`mvn clean install`

to build and install the artifact in your local Maven repository.

The output is one amp-file to be installed into the repository part of your Alfresco installation and one jar-file that is needed by Alfresco Share.

Declare those as dependencies in your artifacts (if you are using the Maven SDK), 
For Share:
```
		<dependency>
		    <groupId>com.acando.alfresco</groupId>
		    <artifactId>listmanager-jar</artifactId>
		    <version>1.3</version>
		    <scope>runtime</scope>
		</dependency>
```
For the Repository:
```
 		<dependency>
 		    <groupId>com.acando.alfresco</groupId>
 		    <artifactId>listmanager-amp</artifactId>
 		    <version>1.3</version>
 		    <type>amp</type>
 		</dependency>
```
Don't forget to add it as an overlay in the maven-war-plugin configuration as well:
```...
        <overlay>
            <groupId>com.acando.alfresco</groupId>
			<artifactId>listmanager-amp</artifactId>
            <type>amp</type>
        </overlay>...
```
or, otherwise drop the jar-file in to ```tomcat/shared/classes``` of your installation and install the amp with the mmt-tool.

### Downloadable binaries

The latest version binaries can also be downloaded for manual installation as stated above.
Download [the amp file](https://s3-eu-west-1.amazonaws.com/alfresco-listmanager-dist/listmanager-amp-1.3.amp)
and 
[the jar file](https://s3-eu-west-1.amazonaws.com/alfresco-listmanager-dist/listmanager-jar-1.3.jar) 


### Usage

When correctly installed a new GUI can be found in the Admin console part of Alfresco Share Application Settings -> List Manager.

![Screenshot](/images/screenshot_listmanager.jpg "Screenshot")

To make use of the values from one list, use the customselectone.ftl form control supplied like this:

```					
<field id="ac:changeRequestStatus">
		<control template="/org/alfresco/components/form/controls/customselectone.ftl">
			<control-param name="listboxname">changeRequest_status</control-param>
		</control>                   
</field>
```
Where "changeRequest_status" is the name of a list containing all change request statuses that our listbox should contain.

![Screenshot](/images/screenshot_crlist.jpg "Screenshot")


### Issue Management
If you want to report a bug please create a new [issue](https://github.com/acando/alfresco-listmanager/issues)

### Contributions
Contributions are welcome. Clone the project, implement the change/feature and submit to github [pull request](https://github.com/acando/alfresco-listmanager/pulls).

