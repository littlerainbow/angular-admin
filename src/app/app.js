import angular from 'angular';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import router from 'angular-ui-router';
import amountComponent from "../components/amount-component";
import articlesList from "../components/articles-list";
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
    .component('amountComponent', amountComponent)
    .component('articlesList', articlesList)
    .service('articlesCount', articlesCount)
    .config(function ($stateProvider) {

        let helloState = {
            name: 'main',
            url: '/',
            template: require('../templates/home-template.html')
        };

        let aboutState = {
            name: 'articleUpdate',
            url: '/update/:id',
            template: '<update-article></update-article>',
            controller: function ($stateParams) {
                this.id = $stateParams.id
            }
        };
        let addState = {
            name: 'articleAdd',
            url: '/add',
            template: '<add-article></add-article>',
            controller: function ($stateParams, $http) {
                this.id = $stateParams.id
            }
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(addState);
    })


export default MODULE_NAME;