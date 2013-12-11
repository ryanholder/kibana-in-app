/** @scratch /configuration/config.js/1
 * == Configuration ==
 * config.js is where you will find the core Kibana configuration. This file contains parameter that
 * must be set before kibana is run for the first time.
 */
define(['settings'],
function (Settings) {
  

  /** @scratch /configuration/config.js/2
   * === Parameters ===
   */
  return new Settings({

    /** @scratch /configuration/config.js/5
     * ==== elasticsearch ====
     *
     * The URL to your elasticsearch server. You almost certainly don't
     * want +http://localhost:9200+ here. Even if Kibana and Elasticsearch are on
     * the same host. By default this will attempt to reach ES at the same host you have
     * elasticsearch installed on. You probably want to set it to the FQDN of your
     * elasticsearch host
     */
    elasticsearch: "http://logsearch.cityindextest5.co.uk/#/dashboard",

    /** @scratch /configuration/config.js/5
     * ==== kibana-int ====
     *
     * The default ES index to use for storing Kibana specific object
     * such as stored dashboards
     */
    kibana_index: "kibana-int",

    /** @scratch /configuration/config.js/5
     * ==== panel_name ====
     *
     * An array of panel modules available. Panels will only be loaded when they are defined in the
     * dashboard, but this list is used in the "add panel" interface.
     */
    panel_names: [
      'histogram',
      'map',
      'pie',
      'table',
      'filtering',
      'timepicker',
      'text',
      'hits',
      'dashcontrol',
      'column',
      'trends',
      'bettermap',
      'query',
      'terms',
      'sparklines'
    ]
  });
});
