var listboxname=url.templateArgs.listboxname;
var nodes = search.luceneSearch("PATH:\"/app:company_home/app:dictionary/cm:Lists/cm:"+listboxname+"/*\"", "@{http://www.acando.com/model/listmanager/1.0}ordinalNumber", true);
model.listboxvalues = nodes;