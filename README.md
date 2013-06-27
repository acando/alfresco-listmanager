# [Alfresco](http://www.alfresco.com) listmanager
This addon provides a way to manage list of values to be used in alfresco metadata forms. This is for the times you do not want to
use model provided constraints.

## Getting started

### Dependencies

#### Alfresco

The extension is created with [Alfresco Maven SDK](https://arti
facts.alfresco.com/nexus/content/repositories/alfresco-docs/alfresco-lifecycle-aggregator/latest/index.html) and compiles against Alfresco Community 4.2.c. It's also been tested with:

* Alfresco Community 4.0.e and higher
* Alfresco Enterprise 4.0.2 and higher

### Building

The project use [Maven](http://maven.apache.org) (at least 3.0.x) for building.

Get the source, enter the directory and execute

`mvn clean install`

to build and install the artifact in your local Maven repository.

The output is one amp to be installed into the repository part of your alfresco installation and one jar-file that is needed by Share.

Declare those as dependencies in your artifacts (if you are using the Maven SDK), or, otherwise drop the jar-file in to ```tomcat/shared/classes``` of your installation.

### Usage

When correctly installed a new GUI can be found in the Admin console part of Alfresco Share Application Settings -> List Manager.

To make use of the values from one list, use the customselectone.ftl form control supplied like this:

```					<field id="ac:changeRequestStatus">
							<control template="/org/alfresco/components/form/controls/customselectone.ftl">
                				<control-param name="listboxname">changeRequest_status</control-param>
                			</control>                   
             		</field>
```
Where "changeRequest_status" is the name of a list containing all change request statuses that our listbox should contain.

![Screenshot](/images/screenshot_listmanager.jpg "Screenshot")



