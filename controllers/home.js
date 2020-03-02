/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.terms = (req, res) => {
  res.render('terms', {
    title: 'Terms'
  });
};

exports.privacy = (req, res) => {
  res.render('privacy', {
    title: 'Privacy'
  });
};

exports.faq = (req, res) => {
  res.render('faq', {
    title: 'FAQs'
  });
};

exports.team = (req, res) => {
  res.render('team', {
    title: 'Team'
  });
};

exports.service = (req, res) => {
  if (req.params.id > 0 && req.params.id <= 10) {
    const services = [
      'Structural Street',
      'Fire Escapes',
      'Metal Decks',
      'Staircase',
      'Spiral Staircase',
      'Railings',
      'Metal Fences',
      'Metal Gates',
    ];
    res.render('service', {
      title: 'Service',
      serviceId: req.params.id,
      serviceName: services[parseInt(req.params.id, 10) - 1]
    });
    return;
  }
  res.redirect('/');
};
