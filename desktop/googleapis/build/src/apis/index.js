"use strict";
// Copyright 2019 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const abusiveexperiencereport = require("./abusiveexperiencereport");
const acceleratedmobilepageurl = require("./acceleratedmobilepageurl");
const accesscontextmanager = require("./accesscontextmanager");
const adexchangebuyer = require("./adexchangebuyer");
const adexchangebuyer2 = require("./adexchangebuyer2");
const adexperiencereport = require("./adexperiencereport");
const admin = require("./admin");
const adsense = require("./adsense");
const adsensehost = require("./adsensehost");
const alertcenter = require("./alertcenter");
const analytics = require("./analytics");
const analyticsreporting = require("./analyticsreporting");
const androiddeviceprovisioning = require("./androiddeviceprovisioning");
const androidenterprise = require("./androidenterprise");
const androidmanagement = require("./androidmanagement");
const androidpublisher = require("./androidpublisher");
const appengine = require("./appengine");
const appsactivity = require("./appsactivity");
const appstate = require("./appstate");
const bigquery = require("./bigquery");
const bigquerydatatransfer = require("./bigquerydatatransfer");
const bigtableadmin = require("./bigtableadmin");
const binaryauthorization = require("./binaryauthorization");
const blogger = require("./blogger");
const books = require("./books");
const calendar = require("./calendar");
const chat = require("./chat");
const civicinfo = require("./civicinfo");
const classroom = require("./classroom");
const cloudasset = require("./cloudasset");
const cloudbilling = require("./cloudbilling");
const cloudbuild = require("./cloudbuild");
const clouddebugger = require("./clouddebugger");
const clouderrorreporting = require("./clouderrorreporting");
const cloudfunctions = require("./cloudfunctions");
const cloudidentity = require("./cloudidentity");
const cloudiot = require("./cloudiot");
const cloudkms = require("./cloudkms");
const cloudprivatecatalog = require("./cloudprivatecatalog");
const cloudprivatecatalogproducer = require("./cloudprivatecatalogproducer");
const cloudprofiler = require("./cloudprofiler");
const cloudresourcemanager = require("./cloudresourcemanager");
const cloudscheduler = require("./cloudscheduler");
const cloudsearch = require("./cloudsearch");
const cloudshell = require("./cloudshell");
const cloudtasks = require("./cloudtasks");
const cloudtrace = require("./cloudtrace");
const composer = require("./composer");
const compute = require("./compute");
const container = require("./container");
const containeranalysis = require("./containeranalysis");
const content = require("./content");
const customsearch = require("./customsearch");
const dataflow = require("./dataflow");
const dataproc = require("./dataproc");
const datastore = require("./datastore");
const deploymentmanager = require("./deploymentmanager");
const dfareporting = require("./dfareporting");
const dialogflow = require("./dialogflow");
const digitalassetlinks = require("./digitalassetlinks");
const discovery = require("./discovery");
const dlp = require("./dlp");
const dns = require("./dns");
const docs = require("./docs");
const doubleclickbidmanager = require("./doubleclickbidmanager");
const doubleclicksearch = require("./doubleclicksearch");
const drive = require("./drive");
const driveactivity = require("./driveactivity");
const factchecktools = require("./factchecktools");
const file = require("./file");
const firebasedynamiclinks = require("./firebasedynamiclinks");
const firebasehosting = require("./firebasehosting");
const firebaserules = require("./firebaserules");
const firestore = require("./firestore");
const fitness = require("./fitness");
const fusiontables = require("./fusiontables");
const games = require("./games");
const gamesConfiguration = require("./gamesConfiguration");
const gamesManagement = require("./gamesManagement");
const genomics = require("./genomics");
const gmail = require("./gmail");
const groupsmigration = require("./groupsmigration");
const groupssettings = require("./groupssettings");
const healthcare = require("./healthcare");
const iam = require("./iam");
const iamcredentials = require("./iamcredentials");
const iap = require("./iap");
const identitytoolkit = require("./identitytoolkit");
const indexing = require("./indexing");
const jobs = require("./jobs");
const kgsearch = require("./kgsearch");
const language = require("./language");
const libraryagent = require("./libraryagent");
const licensing = require("./licensing");
const logging = require("./logging");
const manufacturers = require("./manufacturers");
const mirror = require("./mirror");
const ml = require("./ml");
const monitoring = require("./monitoring");
const oauth2 = require("./oauth2");
const oslogin = require("./oslogin");
const pagespeedonline = require("./pagespeedonline");
const people = require("./people");
const playcustomapp = require("./playcustomapp");
const plus = require("./plus");
const plusDomains = require("./plusDomains");
const poly = require("./poly");
const proximitybeacon = require("./proximitybeacon");
const pubsub = require("./pubsub");
const redis = require("./redis");
const remotebuildexecution = require("./remotebuildexecution");
const replicapool = require("./replicapool");
const reseller = require("./reseller");
const run = require("./run");
const runtimeconfig = require("./runtimeconfig");
const safebrowsing = require("./safebrowsing");
const script = require("./script");
const searchconsole = require("./searchconsole");
const securitycenter = require("./securitycenter");
const servicebroker = require("./servicebroker");
const serviceconsumermanagement = require("./serviceconsumermanagement");
const servicecontrol = require("./servicecontrol");
const servicemanagement = require("./servicemanagement");
const servicenetworking = require("./servicenetworking");
const serviceusage = require("./serviceusage");
const sheets = require("./sheets");
const siteVerification = require("./siteVerification");
const slides = require("./slides");
const sourcerepo = require("./sourcerepo");
const spanner = require("./spanner");
const speech = require("./speech");
const sqladmin = require("./sqladmin");
const storage = require("./storage");
const storagetransfer = require("./storagetransfer");
const streetviewpublish = require("./streetviewpublish");
const surveys = require("./surveys");
const tagmanager = require("./tagmanager");
const tasks = require("./tasks");
const testing = require("./testing");
const texttospeech = require("./texttospeech");
const toolresults = require("./toolresults");
const tpu = require("./tpu");
const translate = require("./translate");
const urlshortener = require("./urlshortener");
const vault = require("./vault");
const videointelligence = require("./videointelligence");
const vision = require("./vision");
const webfonts = require("./webfonts");
const webmasters = require("./webmasters");
const websecurityscanner = require("./websecurityscanner");
const youtube = require("./youtube");
const youtubeAnalytics = require("./youtubeAnalytics");
const youtubereporting = require("./youtubereporting");
exports.APIS = {
    abusiveexperiencereport: abusiveexperiencereport.VERSIONS,
    acceleratedmobilepageurl: acceleratedmobilepageurl.VERSIONS,
    accesscontextmanager: accesscontextmanager.VERSIONS,
    adexchangebuyer: adexchangebuyer.VERSIONS,
    adexchangebuyer2: adexchangebuyer2.VERSIONS,
    adexperiencereport: adexperiencereport.VERSIONS,
    admin: admin.VERSIONS,
    adsense: adsense.VERSIONS,
    adsensehost: adsensehost.VERSIONS,
    alertcenter: alertcenter.VERSIONS,
    analytics: analytics.VERSIONS,
    analyticsreporting: analyticsreporting.VERSIONS,
    androiddeviceprovisioning: androiddeviceprovisioning.VERSIONS,
    androidenterprise: androidenterprise.VERSIONS,
    androidmanagement: androidmanagement.VERSIONS,
    androidpublisher: androidpublisher.VERSIONS,
    appengine: appengine.VERSIONS,
    appsactivity: appsactivity.VERSIONS,
    appstate: appstate.VERSIONS,
    bigquery: bigquery.VERSIONS,
    bigquerydatatransfer: bigquerydatatransfer.VERSIONS,
    bigtableadmin: bigtableadmin.VERSIONS,
    binaryauthorization: binaryauthorization.VERSIONS,
    blogger: blogger.VERSIONS,
    books: books.VERSIONS,
    calendar: calendar.VERSIONS,
    chat: chat.VERSIONS,
    civicinfo: civicinfo.VERSIONS,
    classroom: classroom.VERSIONS,
    cloudasset: cloudasset.VERSIONS,
    cloudbilling: cloudbilling.VERSIONS,
    cloudbuild: cloudbuild.VERSIONS,
    clouddebugger: clouddebugger.VERSIONS,
    clouderrorreporting: clouderrorreporting.VERSIONS,
    cloudfunctions: cloudfunctions.VERSIONS,
    cloudidentity: cloudidentity.VERSIONS,
    cloudiot: cloudiot.VERSIONS,
    cloudkms: cloudkms.VERSIONS,
    cloudprivatecatalog: cloudprivatecatalog.VERSIONS,
    cloudprivatecatalogproducer: cloudprivatecatalogproducer.VERSIONS,
    cloudprofiler: cloudprofiler.VERSIONS,
    cloudresourcemanager: cloudresourcemanager.VERSIONS,
    cloudscheduler: cloudscheduler.VERSIONS,
    cloudsearch: cloudsearch.VERSIONS,
    cloudshell: cloudshell.VERSIONS,
    cloudtasks: cloudtasks.VERSIONS,
    cloudtrace: cloudtrace.VERSIONS,
    composer: composer.VERSIONS,
    compute: compute.VERSIONS,
    container: container.VERSIONS,
    containeranalysis: containeranalysis.VERSIONS,
    content: content.VERSIONS,
    customsearch: customsearch.VERSIONS,
    dataflow: dataflow.VERSIONS,
    dataproc: dataproc.VERSIONS,
    datastore: datastore.VERSIONS,
    deploymentmanager: deploymentmanager.VERSIONS,
    dfareporting: dfareporting.VERSIONS,
    dialogflow: dialogflow.VERSIONS,
    digitalassetlinks: digitalassetlinks.VERSIONS,
    discovery: discovery.VERSIONS,
    dlp: dlp.VERSIONS,
    dns: dns.VERSIONS,
    docs: docs.VERSIONS,
    doubleclickbidmanager: doubleclickbidmanager.VERSIONS,
    doubleclicksearch: doubleclicksearch.VERSIONS,
    drive: drive.VERSIONS,
    driveactivity: driveactivity.VERSIONS,
    factchecktools: factchecktools.VERSIONS,
    file: file.VERSIONS,
    firebasedynamiclinks: firebasedynamiclinks.VERSIONS,
    firebasehosting: firebasehosting.VERSIONS,
    firebaserules: firebaserules.VERSIONS,
    firestore: firestore.VERSIONS,
    fitness: fitness.VERSIONS,
    fusiontables: fusiontables.VERSIONS,
    games: games.VERSIONS,
    gamesConfiguration: gamesConfiguration.VERSIONS,
    gamesManagement: gamesManagement.VERSIONS,
    genomics: genomics.VERSIONS,
    gmail: gmail.VERSIONS,
    groupsmigration: groupsmigration.VERSIONS,
    groupssettings: groupssettings.VERSIONS,
    healthcare: healthcare.VERSIONS,
    iam: iam.VERSIONS,
    iamcredentials: iamcredentials.VERSIONS,
    iap: iap.VERSIONS,
    identitytoolkit: identitytoolkit.VERSIONS,
    indexing: indexing.VERSIONS,
    jobs: jobs.VERSIONS,
    kgsearch: kgsearch.VERSIONS,
    language: language.VERSIONS,
    libraryagent: libraryagent.VERSIONS,
    licensing: licensing.VERSIONS,
    logging: logging.VERSIONS,
    manufacturers: manufacturers.VERSIONS,
    mirror: mirror.VERSIONS,
    ml: ml.VERSIONS,
    monitoring: monitoring.VERSIONS,
    oauth2: oauth2.VERSIONS,
    oslogin: oslogin.VERSIONS,
    pagespeedonline: pagespeedonline.VERSIONS,
    people: people.VERSIONS,
    playcustomapp: playcustomapp.VERSIONS,
    plus: plus.VERSIONS,
    plusDomains: plusDomains.VERSIONS,
    poly: poly.VERSIONS,
    proximitybeacon: proximitybeacon.VERSIONS,
    pubsub: pubsub.VERSIONS,
    redis: redis.VERSIONS,
    remotebuildexecution: remotebuildexecution.VERSIONS,
    replicapool: replicapool.VERSIONS,
    reseller: reseller.VERSIONS,
    run: run.VERSIONS,
    runtimeconfig: runtimeconfig.VERSIONS,
    safebrowsing: safebrowsing.VERSIONS,
    script: script.VERSIONS,
    searchconsole: searchconsole.VERSIONS,
    securitycenter: securitycenter.VERSIONS,
    servicebroker: servicebroker.VERSIONS,
    serviceconsumermanagement: serviceconsumermanagement.VERSIONS,
    servicecontrol: servicecontrol.VERSIONS,
    servicemanagement: servicemanagement.VERSIONS,
    servicenetworking: servicenetworking.VERSIONS,
    serviceusage: serviceusage.VERSIONS,
    sheets: sheets.VERSIONS,
    siteVerification: siteVerification.VERSIONS,
    slides: slides.VERSIONS,
    sourcerepo: sourcerepo.VERSIONS,
    spanner: spanner.VERSIONS,
    speech: speech.VERSIONS,
    sqladmin: sqladmin.VERSIONS,
    storage: storage.VERSIONS,
    storagetransfer: storagetransfer.VERSIONS,
    streetviewpublish: streetviewpublish.VERSIONS,
    surveys: surveys.VERSIONS,
    tagmanager: tagmanager.VERSIONS,
    tasks: tasks.VERSIONS,
    testing: testing.VERSIONS,
    texttospeech: texttospeech.VERSIONS,
    toolresults: toolresults.VERSIONS,
    tpu: tpu.VERSIONS,
    translate: translate.VERSIONS,
    urlshortener: urlshortener.VERSIONS,
    vault: vault.VERSIONS,
    videointelligence: videointelligence.VERSIONS,
    vision: vision.VERSIONS,
    webfonts: webfonts.VERSIONS,
    webmasters: webmasters.VERSIONS,
    websecurityscanner: websecurityscanner.VERSIONS,
    youtube: youtube.VERSIONS,
    youtubeAnalytics: youtubeAnalytics.VERSIONS,
    youtubereporting: youtubereporting.VERSIONS,
};
class GeneratedAPIs {
    constructor() {
        this.abusiveexperiencereport = abusiveexperiencereport.abusiveexperiencereport;
        this.acceleratedmobilepageurl = acceleratedmobilepageurl.acceleratedmobilepageurl;
        this.accesscontextmanager = accesscontextmanager.accesscontextmanager;
        this.adexchangebuyer = adexchangebuyer.adexchangebuyer;
        this.adexchangebuyer2 = adexchangebuyer2.adexchangebuyer2;
        this.adexperiencereport = adexperiencereport.adexperiencereport;
        this.admin = admin.admin;
        this.adsense = adsense.adsense;
        this.adsensehost = adsensehost.adsensehost;
        this.alertcenter = alertcenter.alertcenter;
        this.analytics = analytics.analytics;
        this.analyticsreporting = analyticsreporting.analyticsreporting;
        this.androiddeviceprovisioning = androiddeviceprovisioning.androiddeviceprovisioning;
        this.androidenterprise = androidenterprise.androidenterprise;
        this.androidmanagement = androidmanagement.androidmanagement;
        this.androidpublisher = androidpublisher.androidpublisher;
        this.appengine = appengine.appengine;
        this.appsactivity = appsactivity.appsactivity;
        this.appstate = appstate.appstate;
        this.bigquery = bigquery.bigquery;
        this.bigquerydatatransfer = bigquerydatatransfer.bigquerydatatransfer;
        this.bigtableadmin = bigtableadmin.bigtableadmin;
        this.binaryauthorization = binaryauthorization.binaryauthorization;
        this.blogger = blogger.blogger;
        this.books = books.books;
        this.calendar = calendar.calendar;
        this.chat = chat.chat;
        this.civicinfo = civicinfo.civicinfo;
        this.classroom = classroom.classroom;
        this.cloudasset = cloudasset.cloudasset;
        this.cloudbilling = cloudbilling.cloudbilling;
        this.cloudbuild = cloudbuild.cloudbuild;
        this.clouddebugger = clouddebugger.clouddebugger;
        this.clouderrorreporting = clouderrorreporting.clouderrorreporting;
        this.cloudfunctions = cloudfunctions.cloudfunctions;
        this.cloudidentity = cloudidentity.cloudidentity;
        this.cloudiot = cloudiot.cloudiot;
        this.cloudkms = cloudkms.cloudkms;
        this.cloudprivatecatalog = cloudprivatecatalog.cloudprivatecatalog;
        this.cloudprivatecatalogproducer = cloudprivatecatalogproducer.cloudprivatecatalogproducer;
        this.cloudprofiler = cloudprofiler.cloudprofiler;
        this.cloudresourcemanager = cloudresourcemanager.cloudresourcemanager;
        this.cloudscheduler = cloudscheduler.cloudscheduler;
        this.cloudsearch = cloudsearch.cloudsearch;
        this.cloudshell = cloudshell.cloudshell;
        this.cloudtasks = cloudtasks.cloudtasks;
        this.cloudtrace = cloudtrace.cloudtrace;
        this.composer = composer.composer;
        this.compute = compute.compute;
        this.container = container.container;
        this.containeranalysis = containeranalysis.containeranalysis;
        this.content = content.content;
        this.customsearch = customsearch.customsearch;
        this.dataflow = dataflow.dataflow;
        this.dataproc = dataproc.dataproc;
        this.datastore = datastore.datastore;
        this.deploymentmanager = deploymentmanager.deploymentmanager;
        this.dfareporting = dfareporting.dfareporting;
        this.dialogflow = dialogflow.dialogflow;
        this.digitalassetlinks = digitalassetlinks.digitalassetlinks;
        this.discovery = discovery.discovery;
        this.dlp = dlp.dlp;
        this.dns = dns.dns;
        this.docs = docs.docs;
        this.doubleclickbidmanager = doubleclickbidmanager.doubleclickbidmanager;
        this.doubleclicksearch = doubleclicksearch.doubleclicksearch;
        this.drive = drive.drive;
        this.driveactivity = driveactivity.driveactivity;
        this.factchecktools = factchecktools.factchecktools;
        this.file = file.file;
        this.firebasedynamiclinks = firebasedynamiclinks.firebasedynamiclinks;
        this.firebasehosting = firebasehosting.firebasehosting;
        this.firebaserules = firebaserules.firebaserules;
        this.firestore = firestore.firestore;
        this.fitness = fitness.fitness;
        this.fusiontables = fusiontables.fusiontables;
        this.games = games.games;
        this.gamesConfiguration = gamesConfiguration.gamesConfiguration;
        this.gamesManagement = gamesManagement.gamesManagement;
        this.genomics = genomics.genomics;
        this.gmail = gmail.gmail;
        this.groupsmigration = groupsmigration.groupsmigration;
        this.groupssettings = groupssettings.groupssettings;
        this.healthcare = healthcare.healthcare;
        this.iam = iam.iam;
        this.iamcredentials = iamcredentials.iamcredentials;
        this.iap = iap.iap;
        this.identitytoolkit = identitytoolkit.identitytoolkit;
        this.indexing = indexing.indexing;
        this.jobs = jobs.jobs;
        this.kgsearch = kgsearch.kgsearch;
        this.language = language.language;
        this.libraryagent = libraryagent.libraryagent;
        this.licensing = licensing.licensing;
        this.logging = logging.logging;
        this.manufacturers = manufacturers.manufacturers;
        this.mirror = mirror.mirror;
        this.ml = ml.ml;
        this.monitoring = monitoring.monitoring;
        this.oauth2 = oauth2.oauth2;
        this.oslogin = oslogin.oslogin;
        this.pagespeedonline = pagespeedonline.pagespeedonline;
        this.people = people.people;
        this.playcustomapp = playcustomapp.playcustomapp;
        this.plus = plus.plus;
        this.plusDomains = plusDomains.plusDomains;
        this.poly = poly.poly;
        this.proximitybeacon = proximitybeacon.proximitybeacon;
        this.pubsub = pubsub.pubsub;
        this.redis = redis.redis;
        this.remotebuildexecution = remotebuildexecution.remotebuildexecution;
        this.replicapool = replicapool.replicapool;
        this.reseller = reseller.reseller;
        this.run = run.run;
        this.runtimeconfig = runtimeconfig.runtimeconfig;
        this.safebrowsing = safebrowsing.safebrowsing;
        this.script = script.script;
        this.searchconsole = searchconsole.searchconsole;
        this.securitycenter = securitycenter.securitycenter;
        this.servicebroker = servicebroker.servicebroker;
        this.serviceconsumermanagement = serviceconsumermanagement.serviceconsumermanagement;
        this.servicecontrol = servicecontrol.servicecontrol;
        this.servicemanagement = servicemanagement.servicemanagement;
        this.servicenetworking = servicenetworking.servicenetworking;
        this.serviceusage = serviceusage.serviceusage;
        this.sheets = sheets.sheets;
        this.siteVerification = siteVerification.siteVerification;
        this.slides = slides.slides;
        this.sourcerepo = sourcerepo.sourcerepo;
        this.spanner = spanner.spanner;
        this.speech = speech.speech;
        this.sqladmin = sqladmin.sqladmin;
        this.storage = storage.storage;
        this.storagetransfer = storagetransfer.storagetransfer;
        this.streetviewpublish = streetviewpublish.streetviewpublish;
        this.surveys = surveys.surveys;
        this.tagmanager = tagmanager.tagmanager;
        this.tasks = tasks.tasks;
        this.testing = testing.testing;
        this.texttospeech = texttospeech.texttospeech;
        this.toolresults = toolresults.toolresults;
        this.tpu = tpu.tpu;
        this.translate = translate.translate;
        this.urlshortener = urlshortener.urlshortener;
        this.vault = vault.vault;
        this.videointelligence = videointelligence.videointelligence;
        this.vision = vision.vision;
        this.webfonts = webfonts.webfonts;
        this.webmasters = webmasters.webmasters;
        this.websecurityscanner = websecurityscanner.websecurityscanner;
        this.youtube = youtube.youtube;
        this.youtubeAnalytics = youtubeAnalytics.youtubeAnalytics;
        this.youtubereporting = youtubereporting.youtubereporting;
    }
}
exports.GeneratedAPIs = GeneratedAPIs;
//# sourceMappingURL=index.js.map