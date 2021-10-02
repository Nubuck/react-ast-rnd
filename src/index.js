import React from 'react'
import {
  Import,
  Export,
  Var,
  VarKind,
  CallExpression,
  Function,
  Identifier,
  Return,
  Code,
  Expression,
  render,
  renderAst,
} from 'react-ast'

const logger = console

const jsx = (
  <React.Fragment>
    <Import default="z" from="@z1/preset-task" />
    <Export>
      <Var kind={VarKind.Const} name="filterItems">
        <CallExpression
          key="z"
          name="z.fn"
          arguments={[
            <Function
              key="zFunc"
              arrow
              params={[<Identifier key="t">t</Identifier>]}
            >
              <Return key="yield">
                <Function
                  async={true}
                  key="userFunc"
                  arrow
                  params={[
                    <Identifier key="max">max</Identifier>,
                    <Identifier key="items">items</Identifier>,
                  ]}
                >
                  <Return key="result">
                    <CallExpression
                      key="invoker"
                      name="t.filter"
                      arguments={[
                        <Function
                          key="filter"
                          arrow
                          params={[<Identifier key="item">item</Identifier>]}
                        >
                          <Return key="check">
                            <Code>{`item.id < max`}</Code>
                          </Return>
                        </Function>,
                        <Identifier key="items">items</Identifier>,
                      ]}
                    />
                  </Return>
                </Function>
              </Return>
            </Function>,
          ]}
        />
      </Var>
    </Export>
  </React.Fragment>
)

logger.log('======== RECONCILER LIFECYCLE ========')

const renderedOutput = render(jsx)
// const renderedAst = renderAst(jsx)

// logger.log('\n\n======== RENDERED AST ========')
// logger.log(JSON.stringify(renderedAst, null, 2))
logger.log('\n\n======== RENDERED OUTPUT ========')
logger.log(renderedOutput)
logger.log('\n--------------')
