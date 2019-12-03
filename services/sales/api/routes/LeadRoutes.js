const router = require("express").Router();
const { leadValidation } = require("../validation/LeadValidation");
const Leads = require("../db/models/Leads");

// create a lead
router.post("/leads", async (req, res) => {
  // validate leads data
  const { error } = leadValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const lead = new Leads({
    name: req.body.name,
    leadref: req.body.leadref,
    salesperson: req.body.salesperson,
    customer: req.body.customer,
    destination: req.body.destination,
    leadsource: req.body.leadsource,
    datefrom: req.body.datefrom,
    dateto: req.body.dateto,
    adults: req.body.adults,
    children: req.body.children,
    infants: req.body.infants
  });

  try {
    const newLead = await lead.save();
    res.status(200).send({ message: "lead created", lead: newLead._id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get(`/leads/:id`, async (req, res) => {
  // do something amazing
});

module.exports = router;
