import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import BenefitDatatable from './datatables'
class BenefitDental extends Component {
   constructor(props) {
    super(props);
    this.state = {
      benefitdata: []
    }
  }
  render() {
   return(
   <div id="view_benefit_dental">
     <Header params={this.props.params} />
     <Container params={this.props.params} />
   </div>
  )
 }
}

class Header extends Component {
  render(){
    return(
    <div className="page-title" style={{marginLeft: '150px'}} >
      <div className="ui clearing segment">
        <div className="ui container" style={{marginTop: '80px'}}>
          <h1 className="ui left floated header" style={{marginLeft: '-5%'}}>
            </h1><h2>View Benefit</h2>
            <div className="clearfix"></div>
            <div className="ui breadcrumb">
              <a href="/web/benefits/"> {this.props.params.code	} </a>
              <i className="right angle icon divider"></i>
              <div className="active section dim thin">Benefit
              </div>
            </div>
        </div>
      </div>
    </div>
  )
 }
}

class Container extends Component {
  dataSet = [ ["13816", "URINE PREGNANCY TEST, BY VISUAL COLOR COMPARISON METHODS"],
              ["15132", "PROTEIN, TOTAL, EXCEPT BY REFRACTOMETRY; URINE"],
              ["54456", "DEEP SCALING"],
              ["32851", "TRANSCRANIAL DOPPLER STUDY OF THE INTRACRANIAL ARTERIES; COMPLETE STUDY"],
              ["13544", "ALBUMIN; SERUM, PLASMA OR WHOLE BLOOD"],
              ["12321", "MINOR SOFT TISSUE SURGERY"],
              ["96316", "SMEAR, PRIMARY SOURCE WITH INTERPRETATION; FLUORESCENT AND/OR ACID FAST STAIN FOR BACTERIA, FUNGI, PARASITES, VIRUSES OR CELL TYPES"],
              ["13253", "HYDROXYPROGESTERONE, 17-D"],
              ["32156", "DENTAL X-RAY"],
              ["15565", "PERIAPICAL XRAY"],
              ["13565", "Concentration (any type), for infectious agents"],
              ["51210", "OCCLUSAL X-RAY"],
              ["13215", "REMOVABLE PARTIAL DENTURE - UNILATERAL"],
              ["61521", "PIT & FISSURE SEALANT"],
              ["13256", "HYDROXYINDOLACETIC ACID, 5-(HIAA)"],
              ["15785", "Concentration (any type), for infectious agents"],
              ["45845", "TEMPORARY FILLING"],
              ["79865", "EMERGENCY DENTAL TREATMENT"],
              ["65421", "THROMBECTOMY, OPEN, ARTERIOVENOUS FISTULA WITHOUT REVISION, AUTOGENOUS OR NONAUTOGENOUS DIALYSIS GRAFT"],
              ["35624", "PALLIATIVE TREATMENT OF SIMPLE MOUTH SORES AND BLISTERS"],
              ["96654", "RECEMENTATION OF JACKET CROWNS, BRIDGES, INLAY AND ONLAY"],
              ["35498", "EMERGENCY DENTAL TREATMENT"]
  ]

  render(){
   let imgSrc= process.env.PUBLIC_URL + "/images/tooth.png"
   let imgStyle = {height: "82px", width: "82px"}

  return(
    <div className="ui container" style={{paddingLeft: '150px'}}>
      <div className="content-section white-bg">
        <div className="ui grid">
          <div className="row">
              <div className="two wide computer sixteen wide mobile column">
                <div className="mb-2 center aligned">
                  <div className="mr-2">
                  <img src={imgSrc} style={imgStyle} />
                  </div>
                  <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riders</label>
                </div>
              </div>
              <div className="six wide computer eight wide tablet eight wide mobile column">
                <p className="member-name" style={{color: 'rgb(0, 178, 79)'}}>{this.props.params.code}</p>
                  <div className="section-title mt-2">
                    <h1><div className="title-name">Benefit Dental Name</div></h1>
                  </div>
              </div>
              <BenefitOptions />
              <BenefitDetails />
              <div class="sixteen wide computer column ui divider"></div>
              <h3>CDT</h3>
              <BenefitDatatable data={this.dataSet} />
          </div>
        </div>
      </div>
    </div>
  )
 }
}

class BenefitDetails extends Component {
 render(){
     let styles = {height: '9px'}
    return(
     <div className="eight wide computer eight wide tablet eight wide mobile column">
       <div className="ui grid">
         <div className="nine wide column">
           <div style={styles}></div>
           <div className="ui form">
             <div className="three fields">
               <div className="field dim">
                   LAST UPDATE
               </div>
               <div className="field"></div>
               <div className="field">
                   2018-09-28
               </div>
             </div>
             <div className="three fields">
               <div className="field dim">
                   UPDATED BY
               </div>
               <div className="field"></div>
               <div className="field">
                   masteradmin
               </div>
             </div>
             <div className="three fields">
               <div className="field dim">
                   COVERAGE
               </div>
               <div className="field"></div>
               <div className="field">
                   Dental
              </div>
             </div>
             <div className="three fields">
              <div className="field dim">
                   CATEGORY
              </div>
              <div className="field"></div>
              <div className="field">
                   N/A
              </div>
             </div>
             <div className="three fields">
              <div className="field dim">
                   LIMIT TYPE
              </div>
              <div className="field"></div>
              <div className="field">
                <div>
                  <div>
                    Peso
                  </div>
                </div>
              </div>
             </div>
             <div>
              <div>
                <div className="three fields">
                  <div className="field dim">
                     LIMIT
                  </div>
                  <div className="field"></div>
                  <div className="field">
                   <div>
                     100000
                   </div>
                  </div>
                </div>
              </div>
             </div>
             <div className="three fields">
              <div className="field dim">
                   FREQUENCY
              </div>
              <div className="field"></div>
              <div className="field">
                <div>N/A</div>
              </div>
             </div>
            </div>
          </div>
        </div>
     </div>
  )
 }
}

class BenefitOptions extends Component {
 render(){
     let styles = {textAlign: 'right', fontSize: '2rem', paddingTop: '1rem'}
   return(
     <div className="eight wide computer eight wide tablet eight wide mobile column">
       <div className="two wide computer sixteen wide mobile column" style={styles}>
       <div className="ui dropdown">
         <Dropdown direction='left' icon='ellipsis vertical'>
          <Dropdown.Menu>
           <Dropdown.Item icon='edit outline' text='Edit' />
           <Dropdown.Item icon='clone outline' text='Versions' />
           <Dropdown.Item icon='icon-product' text='View plans' />
           <Dropdown.Item icon='trash alternate' text='Discontinue' />
           <Dropdown.Item icon='trash alternate' text='Delete' />
          </Dropdown.Menu>
         </Dropdown>
       </div>
       </div>
     </div>
  )
 }
}


export default BenefitDental;
