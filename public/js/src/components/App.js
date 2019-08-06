function App(props){
    return(<div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            {/*   <TopNav>   */}
                <TopNav/>
            {/*   </TopNav>   */}
  
  
              {/*   <SideNav>   */}
                <SideNav/>
              {/*   </SideNav>   */}
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
  
                     {/*   </Comments>   */}
                        <Comments newComments={props.newComments}/>
                      {/*   </Comments>   */}
  
                      {/*   <Tasks>   */}
                        <Tasks newTasks={props.newTasks}/>
                      {/*   </Tasks>   */}
  
                      {/*   <Orders>   */}
                        <Orders newOrders={props.newOrders}/>
                      {/*   </Orders>   */}
  
  
                      {/*   <Tickets>   */}
                        <Tickets tickets={props.tickets}/>
                      {/*   </Tickets>   */}
  
  
  
  
                  </div>
                  
                  {/*   <AreaChart>   */}
                    <AreaChart/>
                  {/*   </AreaChart>   */}
  
                  <div className="row">
  
  
                      {/*   <DonutChart>   */}
                        <DonutChart/>
                      {/*   </DonutChart>   */}
  
  
                      <div className="col-lg-4">
                          {/*   <TasksPanel>   */}
                            <TasksPanel/>
                          {/*   </TasksPanel>   */}
  
  
                      </div>
                      <div className="col-lg-4">
  
  
                          {/*   </TransactionsPanel>   */}
                            <TransactionsPanel orders={props.orders}/>
                          {/*   </TransactionsPanel>   */}
  
                      </div>
                  </div>
                  
  
              </div>
              
  
          </div>
          
  
      </div>
      </div>)
}