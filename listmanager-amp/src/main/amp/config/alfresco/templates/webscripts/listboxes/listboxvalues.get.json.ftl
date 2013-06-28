[
<#list listboxvalues as result>
	{
   		"label": "${result.properties.name}",
   		"value": "${result.properties.name}"
   	}<#if result_has_next>,</#if>
</#list>
]
