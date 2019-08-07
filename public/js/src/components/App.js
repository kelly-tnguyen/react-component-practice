function App(props){
  return(
      <div> 
          <div id="wrapper">
              <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                  <TopNav messages={props.messages}/>
                  <SideNav/>
              </nav>
              <div id="page-wrapper">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-lg-12">
                              <h1 className="page-header">
                                  Dashboard <small>Statistics Overview</small>
                              </h1>
                              <ol className="breadcrumb">
                                  <li className="active">
                                      <i className="fa fa-dashboard"></i> Dashboard
                                  </li>
                              </ol>
                          </div>
                      </div>
                      <div className="row">
                          <Comments newComments={props.newComments}/>
                          <Tasks newTasks={props.newTasks}/>
                          <Orders newOrders={props.newOrders}/>
                          <Tickets tickets={props.tickets}/>
                      </div>
                      <AreaChart/>
                      <div className="row">
                          <DonutChart/>
                          <div className="col-lg-4">
                              <TaskPanel tasks={props.tasks}/>
                          </div>
                          <div className="col-lg-4">
                              <TransactionsPanel orders={props.orders}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
} 