# <u>What's New</u>

### Version: 2.0.0 
#### (Upcoming)
1. Fresh new look - We've resesigned the interface for a cleaner, more modern experience.
2. Updated to the latest platform and framework for better performance and compatibility.
3. (new) Able to set QR code as SKU for item.

-----
### Version: 1.4.24 
#### (2025-06-02 0950 UTC)
1. Bugs fixes

-----
### Version: 1.4.22 
#### (2024-06-17 0352 UTC)
1. Bugs fixes

-----
### Version: 1.4.20 
#### (2024-06-16 0608 UTC)
1. Bugs fixes

-----
### Version: 1.4.10 
#### (2023-10-25 1445 UTC)
1. Bump target to Android 13
2. Internal housekeeping to prepare for next major update

-----
### Version: 1.4.8 
#### (2022-08-22 0755 UTC)
1. Bugs fixes and performance improvements

-----
### Version: 1.4.5 
#### (2022-02-12 1115 UTC)
1. Bugs fixes and performance improvements

-----
### Version: 1.4.3 
#### (2021-09-21 1325 UTC)
1. Fixed after committing transaction, items with itemBOM is not harden correctly
2. Fixed: label color and warning indicator in Pick and StockTake is not displayed correctly 
3. Bugs fixes and performance improvements

-----
### Version: 1.4.1 
#### (2021-09-08 0520 UTC)
1. Fixed QR Code not showing on some devices
2. Fixed some transactions are not shown
3. Improved on the auto suggestion UX (e.g. selecting Item’s Category, Brand)
4. Improved on the Item’s Detail UI
5. Bugs fixes and performance improvements

-----
### Version: 1.3.0 
#### (2021-05-18 0845 UTC)
1. <span class="breaking-change">[Breaking-Change]</span> Target Android 11 with Scoped Storage security implementation. Dian Huo app will now only be allowed to it’s app and user-chosen storage location. You will be required to select a default storage location; after the selection:
    a. All previous backup files in the old location - `/Android/data/co.TENg.DianHuo/files/Backup` - will moved to the new location
    b. Future [Backup Data] will back up to this new location
2. [Restore Data] will allow you to select the archive file in any location on your device. It is no longer fixed only at the pre-defined location - `/Android/data/co.TENg.DianHuo/files/Backup`
3. Bugs fixes and performance improvements

-----
### Version: 1.2.3 
#### (2021-01-15 1230 UTC)
1. Better display of numeric text with number separator in the thousandth-placed
2. Better enforcement of decimal to 2 precision. Excess precision will be truncated off
3. Enhanced the UX when entering adjustment value with larger numeric display, a clear all text button, and more informative item’s detail: 
	<br/><img width="336" height="400" alt="image" src="https://github.com/user-attachments/assets/ff5bb78c-37c8-4874-a79a-c1f5ce92430a" />
4. Improved alert’s UI with icon and title
5. To delete an item, it must first be disabled
6. [View log] when opening log, always display the latest by default
7. [View log] added filters to select what to view
8. Bugs fixes and performance improvements

-----
### Version: 1.2.2 
#### (2020-11-19 09:40 UTC)
1. <span class="breaking-change">[Breaking-Change]</span> Improved the color coding of Category. Similar text will have the same color. E.g. Drinks#Coffee and Drinks#Cans#Coffee, the word ‘Coffee’ will have the same color

    <img width="293" height="114" alt="image" src="https://github.com/user-attachments/assets/25307ac9-0b1a-429f-8096-cf34875e9512" />
2. <span class="breaking-change">[Breaking-Change]</span> Improved security by following the Android 11 Scoped Storage enforcement. This implementation changed the location of Data backup and restore:
    ```
	Old Location: /DianHuo/Backup
	New Location: /Android/data/co.TENg.DianHuo/files/Backup
	```
3. Replaced typing of ‘Confirm’ with ‘Slide to Confirm’:

   <img width="329" height="76" alt="image" src="https://github.com/user-attachments/assets/643b7b78-970f-4fa1-b0db-cecd561b0a63" />

4. New button to remove all disabled/deleted items in a transaction:

	<img width="341" height="275" alt="image" src="https://github.com/user-attachments/assets/03636738-4f94-4039-aefc-03440f47fe84" />
	
5. Bugs fixes and performance improvements

-----
### Version: 1.1.0 
#### (2020-06-21 11:45 UTC)
1. Several UI redesign to improve user experience
2. Changed view to use bottom tab view
3. Added touch effect for controls that could be clicked (e.g. buttons and links)
4. Show a message if any draft Transaction’s items is refreshed with updated item master
5. The status name ‘Posted’ is renamed to ‘Local_Posted’
6. Display transaction’s status as a stamp in the upper right corner when in Transaction view
7. Added a ‘Share’ functionality in the notification whenever a file is saved (e.g. DB backup, export and etc)
8. Optimized Production Plan functionalities
9. Production Plan: No longer need to manually `Refresh BOM`, it will be automatically refreshed when needed
10. Improved keyboard text input with auto-capitalization and word suggestion
11. Bugs fixes and performance improvements

-----
### Version: 1.0.26 
#### (2020-02-29 2:15 UTC)
1. Category auto suggest now display suggestion based on keyword’s contain-match instead of exact-match
2. Improved the visibility of the category’s text color
3. Added `View Log` in the Settings page
4. Bugs fixes and performance improvements

-----
### Version: 1.0.25 
#### (2020-02-17 2:25 UTC)
1. Standardized the display of date for Transactions list
2. Show a lock icon at the title for transaction (Receive, Pick, Stock-Take) that is posted in Transaction page
3. Item’s category is color coded for easier visualization
4. Show indicator if item’s category is multi-level
5. Bugs fixes and performance improvements

-----
### Version: 1.0.24 
#### (2020-02-08 6:05 UTC)
1. When viewing the item’s image, show the date it was added
2. Bugs fixes and performance improvements

-----
### Version: 1.0.23 
#### (2020-01-19 11:32 UTC)
1. Added support for Android 10 (Q)
2. Performance improvement

-----
### Version: 1.0.21 
#### (2019-11-16 11:35 UTC) 
1. Improved image viewer to allow pinch-to-zoom function
2. Simplified Item creation without the need to pre-create Uom and Category first
3. New Feature: able to create sub Category / multi-level Category
4. Bugs fixes and performance improvement

-----
### Version: 1.0.17 
#### (2019-11-06 10:00 UTC) 
1. Improved the accuracy of the parallax text when scrolling the Item’s List
2. Improved the Menu display for different device resolution
3. Avoid redundant refreshing of the caller’s page when a page closes
4. Improved in-app messages
5. Upgraded UI components for improved performance
6. Upgraded Internal DB to version 2
7. Bugs fixes and performance improvement

-----
### Version: 1.0.13 
#### (2019-10-12 10:35 UTC)
1. Able to assign item’s SKU as item’s QR code
2. Improve internal logging
3. Improve internal caching
4. UI enhancement
5. Bugs fixes and performance improvement

-----
### Version: 1.0.12 
#### (2019-08-28 17:45 UTC)
1. Improve the sending of feedback via the app
2. New popup to show record’s date detail
3. Minor bugs fixes

-----
### Version: 1.0.11 
#### (2019-08-10 16:30 UTC)
1. Bugs fixes and performance improvement

-----
### Version: 1.0.9 
#### (2019-07-04 17:11 UTC)
1. Performance optimization
2. Bugs fixes

-----
### Version: 1.0.6 
#### (2019-06-26 15:52 UTC)
1. Red background if count is negative
1. Show indicator if pick qty is more than on-hand
1. Display a padlock icon when viewing item’s snapshot
1. Minor UI enhancement
1. Minor bugs fix

-----
### Version: 1.0.4 
#### (2019-06-20 14:36 UTC)
1. Ability to archive posted transactions
1. New Page to view archive transactions
1. Ability to restore archived transactions
1. Minor fixes to database restore
1. Performance optimization
1. Minor UI enhancement

-----
### Version: 1.0.1
#### (2019-06-15 10:36 UTC)
1. Better handling when Camera permission is denied
1. Add link to What’s New
1. Performance optimization
1. Minor UI enhancement

-----
### Version: 1.0.0
#### (2019-06-12 16:08 UTC)
1. First Release
