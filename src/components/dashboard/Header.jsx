import React from 'react';
import { BellIcon, ChevronDown, History, Plus, Settings, Users } from 'lucide-react';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <nav className="bg-gray-200 h-12 flex items-center justify-between px-8">
            <div className="flex gap-3">
                <button aria-label="View History">
                    <History className="w-5 h-5" />
                </button>

                <SearchInput />
            </div>

            <div className="flex items-center gap-3">
                {/* plus icon */}
                <div className="pl-3 pr-3 border-l border-gray-300">
                    <button className="p-1 bg-blue-500 rounded-md" aria-label="Add New">
                        <Plus className="text-slate-50 w-4 h-4" />
                    </button>
                </div>

                <div className="flex space-x-2">
                    <button className="p-1 hover:bg-blue-500 rounded-lg" aria-label="View Users">
                        <Users className="w-4 h-4" />
                    </button>

                    <button className="p-1 hover:bg-blue-500 rounded-lg" aria-label="View Notifications">
                        <BellIcon className="w-4 h-4" />
                    </button>

                    <button className="p-1 hover:bg-blue-500 rounded-lg" aria-label="Settings">
                        <Settings className="w-4 h-4" />
                    </button>
                </div>

                {/* User profile section */}
                <div className="flex items-center">
                    <button className="flex items-center gap-1" aria-label="User Profile">
                        <span>Anubhav</span>
                        <ChevronDown className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
