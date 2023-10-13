'use client'

import * as React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import TabItem from './TabItem'

const SettingsTabs = () => {
  const [currentActiveTab, setCurrentActiveTab] = React.useState('tab1')

  return (
    <Tabs.Root value={currentActiveTab} onValueChange={setCurrentActiveTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="tab1"
          isSelected={currentActiveTab === 'tab1'}
        />
        <TabItem
          title="Profile"
          value="tab2"
          isSelected={currentActiveTab === 'tab2'}
        />
        <TabItem
          title="Password"
          value="tab3"
          isSelected={currentActiveTab === 'tab3'}
        />
        <TabItem
          title="Team"
          value="tab4"
          isSelected={currentActiveTab === 'tab4'}
        />
        <TabItem
          title="Plan"
          value="tab5"
          isSelected={currentActiveTab === 'tab5'}
        />
        <TabItem
          title="Billing"
          value="tab6"
          isSelected={currentActiveTab === 'tab6'}
        />
        <TabItem
          title="Email"
          value="tab7"
          isSelected={currentActiveTab === 'tab7'}
        />
        <TabItem
          title="Notification"
          value="tab8"
          isSelected={currentActiveTab === 'tab8'}
        />
        <TabItem
          title="Integrations"
          value="tab9"
          isSelected={currentActiveTab === 'tab9'}
        />
        <TabItem
          title="API"
          value="tab10"
          isSelected={currentActiveTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}

export default SettingsTabs
