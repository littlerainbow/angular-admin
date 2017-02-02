import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import router from 'angular-ui-router';
import amountComponent from "../components/amount-component";
import articlesList from "../components/articles-list";
import  CtrlUpdater from "../controller/Ctr-Updater";
import  CtrlAdder from "../controller/Ctr-Adder";
import  AppCtrl from "../controller/App-Ctrl";
import  formArticle from "../directives/form-directive";
import  articlesCount from "../servises/articles-count";

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngResource, ngRoute, router])
    .directive('app', app)
    .directive('updateArticle', formArticle)
    .directive('addArticle', formArticle)
    .controller('AppCtrl', AppCtrl)
    .controller('CtrlAdder', CtrlAdder)
    .controller('CtrlUpdater', CtrlUpdater)
    .component('amountComponent', amountComponent)
    .component('articlesList', articlesList)
    .service('articlesCount', articlesCount)
    .config(function ($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        let helloState = {
            name: 'main',
            url: '/',
            template: require('../templates/home-template.html')
        };

        let aboutState = {
            name: 'articleUpdate',
            url: '/update/:id',
            template: '<update-article></update-article>',
            controller: "CtrlUpdater"
        };
        let addState = {
            name: 'articleAdd',
            url: '/add',
            template: '<add-article></add-article>',
            controller: "CtrlAdder"
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(addState);
    })


export default MODULE_NAME;