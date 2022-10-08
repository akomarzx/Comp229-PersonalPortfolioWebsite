/*
    Student name: Ronald Jr Ombao
    ID#: 301213219
    Date: October 8, 2022
*/

var express = require('express');

let getHomepage = async (req, res) => {
  res.render('index', { title: 'Homepage' });
}

let getAboutMePage = async (req, res) => {
  res.locals.title = 'About Me'
  res.status(200).render('aboutMeView');
} 

let getProjectsPage =  async (req, res) => {
  res.locals.title = 'Projects'
  res.status(200).render('projects');
}

let getServicesPage = async (req, res) => {
  res.locals.title = 'Services'
  res.status(200).render('services');
}

let getContactMePage = async (req, res) => {
  res.locals.title = 'Contact Me'
  res.status(200).render('contactme');
}

module.exports = {
    getHomepage,
    getAboutMePage,
    getProjectsPage,
    getServicesPage,
    getContactMePage
}